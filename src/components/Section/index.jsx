import React from 'react';
import Description from './Description';
import SubTitle from './SubTitle';
import Title from './Title';
import Content from './Content';

import { amplifyClassnamePropWithStaticClassname } from '../../utils';

import './index.css';

const Section = ({ className = '', children }) => {
  const classNameProperty = amplifyClassnamePropWithStaticClassname(
    'section-container',
    className
  );

  return <section className={classNameProperty}>{children}</section>;
};

export default Section;

Section.Content = Content;
Section.Title = Title;
Section.SubTitle = SubTitle;
Section.Description = Description;
