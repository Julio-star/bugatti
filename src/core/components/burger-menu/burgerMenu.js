import {React, useState} from "react";
import { Link} from "react-router-dom";
import { Menu, Burger } from '@mantine/core';
import './burgerMenu.css';
import { IconHomeMove, IconSettings, IconPresentation, IconHistory, IconAward } from '@tabler/icons';

const BurgerMenu = () => {

  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <div className="Circle">
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Burger
              color="#ffff"
              size={40}
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
          />
        </Menu.Target>

        <Menu.Dropdown>

          <Menu.Label>Navigation</Menu.Label>

          <Menu.Item icon={<IconHomeMove size={14} />}><Link to="/home">Vers Page Home</Link></Menu.Item>
          <Menu.Item icon={<IconPresentation size={14} />}><Link to="/presentation">Vers Page Presentation</Link></Menu.Item>
          <Menu.Item icon={<IconSettings size={14} />}><Link to="/carcomponents">Vers Page Car Components</Link></Menu.Item>
          <Menu.Item icon={<IconHistory size={14} />}><Link to="/history">Vers Page History</Link></Menu.Item>
          <Menu.Item icon={<IconAward size={14} />}><Link to="/records">Vers Page Records</Link></Menu.Item>
      
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default BurgerMenu;


