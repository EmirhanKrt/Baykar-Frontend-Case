export const amplifyClassnamePropWithStaticClassname = (
  staticClassName = '',
  classNameProp
) => {
  let classNameProperty = staticClassName;
  if (classNameProp !== '') classNameProperty += ` ${classNameProp}`;

  return classNameProperty;
};
