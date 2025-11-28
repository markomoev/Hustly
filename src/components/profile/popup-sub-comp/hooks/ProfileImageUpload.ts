import {supabase} from '../../../../client'

export default async function ProfileImageUpload(file: any) {
    try {
        // user id
        const { data: { user } } = await supabase.auth.getUser();
        const user_id: any = user?.id;

        if (!file || !file.name) {
            return {error: "Invalid file object", data: null}
        }

        const filePath = `${user_id}/${file.name}`;

        // upload the image to the storage
        const { error: uploadError } = await supabase.storage
            .from("user_avatar")
            .upload(filePath, file, { upsert: true });

        if (uploadError) {
            return {error: uploadError.message, data: null}
        }

        // getting the public url
        const { data: publicUrl } = supabase
            .storage
            .from('user_avatar')
            .getPublicUrl(filePath);


        // save the url in the users table
        const { error: uploadingUrl } = await supabase
            .from('users')
            .update({ avatar_url: publicUrl.publicUrl })
            .eq('id', user_id);

        if (uploadingUrl) {
            return {error: uploadingUrl.message, data: null}
        }

        return publicUrl.publicUrl;

    } catch (error) {
        return {error: "An unexpected error occurred", data: null}
    }
}