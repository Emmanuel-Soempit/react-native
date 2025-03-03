import { ActionCardOption, ActionCardType } from "@/types";
import Restaurant from '@/assets/images/restaurant.png'
import Analytics from '@/assets/images/analytics.png'
import Menu from '@/assets/images/menu.png'
import Category from '@/assets/images/category.png'

export const actions: ActionCardOption[] = [
    {
        type: 'new restaurant',
        title: 'New Restaurant',
        image: Restaurant,
        route: '/(tabs)/(restaurant)/add-restaurant'
    },
    {
        type: 'analytics',
        title: 'Analytics',
        image: Analytics,
        route: '/(tabs)/restaurant'
    },
    {
        type: 'new menu',
        title: 'New menu',
        image: Menu,
    },
    {
        type: 'new category',
        title: 'New Category',
        image: Category,
    },
    {
        type: 'new item',
        title: 'New Item',
        image: Restaurant,
       
    },
]

export const getAction = ((type:ActionCardType) => actions.find(current => current.type === type) || null)