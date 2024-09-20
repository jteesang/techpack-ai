import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"

const ProfileIcon: React.FC<{ className: string, name: string; url: string }> = ({ className, name, url}) => {
    return (    
      <Avatar className={`${className}`}>
        <AvatarImage src={url} alt={name} />
        <AvatarFallback>{name?.split('')[0]?.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
    )
}

export default ProfileIcon;