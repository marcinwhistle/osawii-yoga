import styles from './Button.module.scss';

const Button = ({
  children,
  variant,
  noHover,
  className: propClassName,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }

  return (
    <Comp href="#" {...props} className={classes.join(' ')}>
      {children}
    </Comp>
  );
};

export default Button;
