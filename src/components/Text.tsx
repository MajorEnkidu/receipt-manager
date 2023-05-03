/** @format */
import styles from '@/styles/components/Text.module.css';

interface ITextProps {
  className?: string
}

export default function Text(props: React.PropsWithChildren<ITextProps>) {
  return <div className={[styles.text, props.className].join(' ')}>{props.children}</div>;
}
