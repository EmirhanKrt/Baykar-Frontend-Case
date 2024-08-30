import React from 'react';
import Description from './Description';
import SubTitle from './SubTitle';
import Title from './Title';

import { amplifyClassnamePropWithStaticClassname } from '../../utils';
import Content from './Content';

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
