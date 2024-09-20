
const ProfileAccount: React.FC<{ className: string, name: string }> = ({ className, name}) => {
    return (
        <div>
            <span className="mr-2 text-sm font-medium">{name}</span>
            <span className="mr-2 text-xs text-gray-500">humanhood WORLD</span>
        </div>
    )
}

export default ProfileAccount;