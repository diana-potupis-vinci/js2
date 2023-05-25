import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { snakeCase } from 'lodash';

import { NavigationContext } from '../contexts/navigation-context';

/**
 * Menu item for an internal page menu
 * startOfLeadingString : by default an empty String, these are special chars that we want to add
 * prior to each menu title : "a." for example.
 * numbered : by default at false. If true, it leads to adding the numbering after the startOfLeadingString
 * numbering : value to be added after the startOfLeadingString if numbered is true.
 * endOfLeadingString : by default an empty String, these are special chars that we want to add
 * prior to each menu title : ")" for example.
 * page : is the relative URL to the page that the menu item shall forward to.
 * @returns
 */
const InternalPageMenuItem = ({
  children,
  className,
  id,
  startOfLeadingString = '',
  numbered = false,
  numbering = '',
  endOfLeadingString = '',
  to,
}) => {
  const itemTextInSnakeCase = snakeCase(children);

  const { activePageMenuItem, setActivePageMenuItem } =
    useContext(NavigationContext);

  const isMenuItemActive = activePageMenuItem === itemTextInSnakeCase;

  return (
    <Link to={to ? to : '#' + itemTextInSnakeCase} className={`${className} ${
      isMenuItemActive ? className + '--selected' : ''
    }`}
    id={`item_${itemTextInSnakeCase}`}>
      {`${startOfLeadingString}${
        numbered ? numbering : ''
      }${endOfLeadingString}${children}`}
    </Link>
  ); 
};

export default InternalPageMenuItem;
