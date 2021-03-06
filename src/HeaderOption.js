import React from 'react'
import { Avatar } from '@material-ui/core'
import './HeaderOption.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import {url} from './BaseUrl';

function HeaderOption({ avatar, Icon,Border, title, onClick }) {


    const currentUser = useSelector(selectUser);
    return (
        <div>
       { Border? 
        <div onClick={onClick} className="headerOption__border">
            {Border && <Border className="headerOption__icon" />}
            {avatar && (
            <Avatar  className="headerOption__icon">{currentUser?.username[0]}</Avatar>
            )}
        <h3 className="headerOption__title">{title}</h3>
        </div> :  <div onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
        {avatar && (
        <Avatar  className="headerOption__icon">{currentUser?.username[0]}</Avatar>
        )}
       <h3 className="headerOption__title">{title}</h3>
    </div> }
    </div>
    
    )
}

export default HeaderOption
