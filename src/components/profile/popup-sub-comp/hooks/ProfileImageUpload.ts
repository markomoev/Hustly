import {supabase} from '../../../../client'

export default async function ProfileImageUpload(file: any) {
    console.log('ProfileImageUpload called with:', file);
    try {
        // user id
        const { data: { user } } = await supabase.auth.getUser();
        const user_id: any = user?.id;

        if (!file || !file.name) {
            console.error('Invalid file object:', file);
            return;
        }

        const filePath = `${user_id}/${file.name}`;
        console.log('Uploading file:', file, 'with path:', filePath);

        // upload the image to the storage
        const { error: uploadError } = await supabase.storage
            .from("user_avatar")
            .upload(filePath, file, { upsert: true });

        if (uploadError) {
            console.error("Error in uploading the file! " + uploadError.message);
            return;
        }

        // getting the public url
        const { data: publicUrl } = supabase
            .storage
            .from('user_avatar')
            .getPublicUrl(filePath);
        console.log("Public URL object:", publicUrl);

        // save the url in the users table
        const { error: uploadingUrl } = await supabase
            .from('users')
            .update({ avatar_url: publicUrl.publicUrl })
            .eq('id', user_id);

        if (uploadingUrl) {
            console.error('Error in inserting uploading the URL!' + uploadingUrl.message);
            return;
        }

        return publicUrl.publicUrl;

    } catch (error) {
        console.error("An unexpected error occurred! " + error);
    }
}