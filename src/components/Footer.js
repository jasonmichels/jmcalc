import React from 'react'
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import SocialDomain from 'material-ui/svg-icons/social/domain';
import Chat from 'material-ui/svg-icons/communication/chat';
import ActionFace from 'material-ui/svg-icons/action/face';

const Footer = () => (
    <Paper zDepth={1}>
        <BottomNavigation>
          <BottomNavigationItem
            label="Github"
            icon={<SocialDomain />}
            onClick={() => window.location = "https://github.com/jasonmichels"}
          />
          <BottomNavigationItem
            label="Twitter"
            icon={<Chat />}
            onClick={() => window.location = "https://twitter.com/jasontmichels"}
          />
          <BottomNavigationItem
            label="LinkedIn"
            icon={<ActionFace />}
            onClick={() => window.location = "https://www.linkedin.com/in/jason-michels-89769b9"}
          />
        </BottomNavigation>
      </Paper>
);

export default Footer