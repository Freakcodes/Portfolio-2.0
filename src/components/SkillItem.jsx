import ProgressBar from "@ramonak/react-progress-bar";


const SkillItem = ({ Icon, name, percent }) => (
  <div className="w-full md:w-[48%]">
    <div className="skill-label flex items-center justify-between text-[0.93rem] text-white font-semibold mb-1">
      <div className="flex items-center gap-2">
        <Icon className="text-xl text-green-400" />
        <span>{name}</span>
      </div>
      <div className="mr-8">{percent}%</div>
    </div>
    <ProgressBar
      completed={percent}
      borderRadius="1px"
      height="10px"
      width="100%"
      labelSize="12px"
      bgColor="#50C878"
      animateOnRender={true}
      transitionTimingFunction="ease-in"
      transitionDuration="1s"
      customLabel=" "
    />
  </div>
);

export default SkillItem
