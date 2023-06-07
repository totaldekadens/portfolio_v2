const Badges = ({ keys }) => {
  return (
    <div className="mt-3 flex flex-wrap items-center justify-center gap-2 ">
      {keys.map((key, i) => (
        <div
          key={i}
          className="z-20 flex items-center justify-center rounded-lg bg-light-100/60 px-2 py-[2px] text-xs font-medium text-dark-300 dark:bg-dark-300/60 dark:text-light-200"
        >
          <span>{key}</span>
        </div>
      ))}
    </div>
  )
}

export default Badges
