import React from 'react';
import logo from '../../assets/logoWhite.png'

import { DropdownProvider, DropdownOption, DropdownRoot } from '../Dropdown';

import { Products ,Developers, Company } from '../Content'

import { Container, DropdownStyles, Logo } from './styles';

const NavBar: React.FC = () => {
  return (
    <DropdownProvider>
     <DropdownStyles>
     <Container>
       <Logo>
         <img src={logo} alt="Logo" />
       </Logo>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products}
                backgroundHeight={286}
              />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
                backgroundHeight={167}
              />
            </li>
            <li>
              <DropdownOption
                name="Empresa"
                content={Company}
                backgroundHeight={215}
              />
            </li>
          </ul>

        </Container>
       <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
};

export default NavBar;
