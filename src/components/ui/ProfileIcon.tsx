import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"

const ProfileIcon: React.FC<{ className: string, name: string; url: string, placeholder: string }> = ({ className, name, url, placeholder}) => {
    return (    
      <Avatar className={`${className}`}>
        <AvatarImage src={url} alt={name ? name : 'Profile'} />
        <AvatarFallback>{name ? name.split('')[0].toUpperCase() : 'A'}</AvatarFallback>
      </Avatar>
    )
}

export default ProfileIcon;