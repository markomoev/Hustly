import {supabase} from '../../../../client'

type ImageFile = {
    image: File;
}

export default async function ProfileImageUpload({image}: ImageFile){
    // user id
    const { data: { user } } = await supabase.auth.getUser()
    const user_id : any = user?.id;
    
    const { data, error: fileUploadError } = await supabase
    .storage
    .from('user_avatar')
    .upload(`${user_id}/${image.name}`, image, {
        cacheControl: '3600',
        upsert: false
    })

    if(fileUploadError){
        console.error('Error in uploading the avatar! ' + fileUploadError.message);
    }

    return data?.path;
}