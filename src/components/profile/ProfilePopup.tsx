import ProfilePopupMenu from './popup-sub-comp/ProfilePopupMenu'
import ProfilePopupContent from './popup-sub-comp/ProfilePopupContent'

export default function ProfilePopup(){
return(
    <div className='w-full h-screen flex flex-row gap-0 justify-center pt-15'>
        {/* menu for other sub pages */}
        <div className='w-auto h-auto'>
            <ProfilePopupMenu/>
        </div>
        {/* main content */}
        <div>
            <ProfilePopupContent/>
        </div>
    </div>
)
}