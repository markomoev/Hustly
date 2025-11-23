import { useEffect, useRef, useState } from "react"
import DataLoader from "./hooks/DataLoader"
import ProfileImageUpload from './hooks/ProfileImageUpload'
import ProfileImageUrl from './hooks/ProfileImageUrl'

import {supabase} from '../../../client'

// for no profile page users
import UserImage from './icons/user.jpg'

export default function ProfilePopupContent(){
// edit mode state
const [isEditMode, setIsEditMode] = useState(false)

// variables for details
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')

// getting the data from the loading function
const handleLoadingData = async () => {
    const res : any = await DataLoader()
    setUsername(res[0][0]?.username)
    setEmail(res[1])
}

useEffect(() => {
    handleLoadingData();
}, [])

// edit mode
const fileInputRef = useRef<HTMLInputElement>(null)

const handleImageClick = () => {
  if (isEditMode && fileInputRef.current) {
    fileInputRef.current.click();
  }
};

// image state
const [image, setImage] = useState<File | null>(null)
const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

const handleImageUpload = async () => {
    // user id
    const { data: { user } } = await supabase.auth.getUser();
    const user_id: any = user?.id;

    if (image) {
        const filePath = await ProfileImageUpload({ image });
        if (!filePath) {
            console.error("Upload failed, no file path returned.");
            return;
        }
        const imageUrl = ProfileImageUrl(filePath);

        // update the users table after the image url is extracted
        const { data, error } = await supabase
            .from('users')
            .update({ 'avatar_url': imageUrl })
            .eq('id', user_id);

        if (error) {
            console.error("Error in inserting the avatar url! " + error.message);
            return;
        }
        setAvatarUrl(imageUrl);
        return data;
    }
}
return(
<div className="flex flex-col gap-8 p-8 bg-zinc-900/50 rounded-tr-lg rounded-br-lg rounded-bl-lg">
    {/* Profile Image and Basic Info */}
    <div className="flex gap-6 items-center">
        <div
            onClick = {handleImageClick} 
            className={`w-32 h-32 rounded-full overflow-hidden `}>
            
            <input 
                type="file"
                ref = {fileInputRef}
                onChange={(e) => 
                        {if(e.target.files)
                        {setImage(e.target.files[0])}}} 
                style = {{display: 'none'}}
                className = {`z-0`}/>
            
            <img 
                src={avatarUrl || UserImage} 
                alt="Profile Picture" 
                className="w-full h-full object-cover z-10"
            />
        </div>
        
        <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">Username</label>
                <input
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)} 
                    readOnly  = {!isEditMode}
                    type="text" 
                    placeholder="Enter username"
                    className="px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:border-amber-700 transition"
                />
            </div>
            
            <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">Email</label>
                <input 
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    readOnly  = {!isEditMode}
                    type="email" 
                    placeholder="Enter email"
                    className="px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:border-amber-700 transition"
                />
            </div>
        </div>
    </div>

    {/* Profile Info */}
    <div>
        <form
            onSubmit = {(e) => {e.preventDefault(); handleImageUpload()}}  
            className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">Bio</label>
                <textarea
                    readOnly  = {!isEditMode}
                    placeholder="Tell us about yourself"
                    rows={4}
                    className="px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:border-amber-700 transition resize-none"
                />
            </div>

            {/* buttons for making changes */}
            <div className='w-full flex flex-row justify-between items-center mt-2'>
                <button
                    onClick = {() => setIsEditMode(true)}
                    type="button"
                    className="cursor-pointer px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg border border-zinc-700 transition"
                >
                    Edit 
                </button>
                {/* buttons for edit and save */}
                <div className="flex gap-3">
                    <button
                        onClick = {() => setIsEditMode(false)}
                        type="button"
                        className={`cursor-pointer px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg border border-zinc-700 transition
                                    ${isEditMode ? 'display':'hidden'}`}
                    > 
                        Cancel
                    </button>

                    <button 
                        type="submit"
                        className={`cursor-pointer px-6 py-2 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-lg transition
                                    ${isEditMode ? 'display':'hidden'}`}
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
)
}