import { useEffect, useRef, useState } from "react"

// fetching data
import useData from "../../../hooks/profile/DataLoader"
import useProfileUpload from '../../../hooks/profile/ProfileImageUpload'
import useSaveCancel from '../../../hooks/profile/SaveCancel'

// for no profile page users
import UserImage from './icons/user.jpg'
// error message
import Error from "../../alerts-loaders/Error"
//for loading
import Loader from "../../alerts-loaders/Loader"

export default function ProfilePopupContent(){
// edit mode state
const [isEditMode, setIsEditMode] = useState<boolean>(false)

// variables for details
const [username, setUsername] = useState<string>('')
const [email, setEmail] = useState<string>('')
const [firstName, setFirstName] = useState<string>('')
const [lastName, setLastName] = useState<string>('')
const [bio, setBio] = useState<string>('')

// for error display and state if there is an error
const [errorMessage, setErrorMessage] = useState<string>('')
const [isError , setIsError] = useState<boolean>(false)

// state for loader
const [isLoading, setIsLoading] = useState(false)

// getting the data from the loading function
const handleLoadingData = async () => {
    setIsLoading(true)
    const res : any = await useData()

    setUsername(res.data[0][0]?.username || "");
    setEmail(res.data[1] || "");
    setFirstName(res.data[0][0]?.firstName || "");
    setLastName(res.data[0][0]?.lastName || "");
    setBio(res.data[0][0]?.bio || "");
    setAvatarUrl(res.data[0][0]?.avatar_url || null);

    if(res && res.error){
        setIsError(true)
        setErrorMessage(res.error)
        return;
    }

    setIsLoading(false)
}

useEffect(() => {
    if (isError) {
        const timer = setTimeout(() => {
            setIsError(false);
            setErrorMessage('');
        }, 5000);
        return () => clearTimeout(timer);
    }
}, [isError]);

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

const handleSaving = async() => {
    if(isEditMode === true){
        const res: any = await useSaveCancel({username, firstName, lastName, bio})

        if(res && res.error){
            setIsError(true)
            setErrorMessage(res.error)
            return;
        }

        setErrorMessage('') 
        setIsEditMode(false)
    }
    return;
}

const Reload = () => {
    setIsEditMode(false)
    handleLoadingData();
}

// image state
const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

const changeAvatar = async (e:any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url : any = await useProfileUpload(file)
    setAvatarUrl(url);

    if(url && url.error){
        setIsError(true)
        setErrorMessage(url.error)
        return;
    }

    setErrorMessage('') 
}
return(
<>
    {isError && (
    <div className="text-black fixed left-13 top-0 w-full flex justify-center z-50 pt-5 overflow-x-hidden">
        <Error message={errorMessage} />
    </div>
)}
    <div className="flex flex-col gap-6 md:gap-8 p-4 md:p-8 bg-zinc-900/50 rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-bl-lg relative w-full">
        { isLoading && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-zinc-900/20 backdrop-blur-[1px] rounded-lg cursor-wait">
                <Loader/>
            </div>
        )}
        {/* Profile Image and Basic Info */}
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            <div
                onClick = {handleImageClick} 
                className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0`}>
                
                <input 
                    type="file"
                    accept = 'image/*'
                    ref = {fileInputRef}
                    onChange = {changeAvatar}
                    style = {{display: 'none'}}
                    className = {`z-0`}/>
                
                <img 
                    src={avatarUrl || UserImage} 
                    alt="Profile Picture" 
                    className="w-full h-full object-cover z-10"
                />
            </div>
            
            <div className="flex flex-col gap-4 flex-1 w-full">
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
                onSubmit={e => { e.preventDefault(); handleSaving(); }}
                className="flex flex-col gap-4">

                {/* Inputs for names */}
                <div className = 'w-full flex flex-row gap-4'>
                    <div className = 'flex flex-col gap-2'>
                        <label className="text-white text-sm font-medium">First name</label>
                        <input
                            value = {firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            readOnly  = {!isEditMode}
                            type="text" 
                            placeholder="Enter your first name"
                            className="px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:border-amber-700 transition"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-white text-sm font-medium">Last name</label>
                        <input 
                            value = {lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            readOnly  = {!isEditMode}
                            type="text" 
                            placeholder="Enter your last name"
                            className="px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:border-amber-700 transition"
                        />
                    </div>
                </div>


                <div className="flex flex-col gap-2">
                    <label className="text-white text-sm font-medium">Bio</label>
                    <textarea
                        value = {bio}
                        onChange = {(e) => setBio(e.target.value)}
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
                            onClick = {Reload}
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
</>
)
}