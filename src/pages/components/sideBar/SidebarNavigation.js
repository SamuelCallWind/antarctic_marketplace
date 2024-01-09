import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



export const navigationMenu = [
    {
        name: "Home",
        icon: <HomeIcon/>,
        path: "/"
    },
    {
        name: "Reels",
        icon: <ExploreIcon/>,
        path: "/"
    },
    {
        name: "Create Reels",
        icon: <ControlPointIcon/>,
        path: "/"
    },
    {
        name: "Notifications",
        icon: <NotificationsIcon/>,
        path: "/"
    },
    {
        name: "Message",
        icon: <MessageIcon/>,
        path: "/"
    },
    {
        name: "Lists",
        icon: <ListAltIcon/>,
        path: "/"
    },
    {
        name: "Communities",
        icon: <GroupIcon/>,
        path: "/"
    },
    {
        name: "Profile",
        icon: <AccountBoxIcon/>,
        path: "/"
    }
]