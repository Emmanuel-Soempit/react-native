import { PlaceholderOption, PlaceholderType } from "@/types";
import Restaurant from '@/assets/images/add-res.png'
import WifiSlashed from '@/assets/images/wifi-slash.png'
import MenuItem from '@/assets/images/add-menu.png'

export const placeholders: PlaceholderOption[] = [
    {
        type: 'no-network',
        image: WifiSlashed,
    },
    {
        type: 'add-restaurant',
        image: Restaurant,
        label: 'Add Restaurant'
    },
    {
        type: 'add-menu-item',
        image: MenuItem,
        label: 'Add Menu Item'
    }
]

export const getPlaceholder = ((type:PlaceholderType) => placeholders.find(current => current.type === type) || null)