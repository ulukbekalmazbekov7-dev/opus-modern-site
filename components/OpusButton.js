export default function OpusButton({ variant='primary', className='', children, ...props }){
  const base='px-5 py-2 rounded-xl font-semibold transition-colors duration-200';
  const map={
    primary:'bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600',
    secondary:'bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500',
    outline:'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-800',
    ghost:'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
  };
  return <button className={`${base} ${map[variant]} ${className}`} {...props}>{children}</button>
}
