export type SelectOptionType = {
  value: string | number;
  label: string;
};

export const pitchingLeadTypeOptions = [
  { value: "pitch_velocity", label: "Pitch Velocity" },
  { value: "spin_rate", label: "Spin Rate" },
];

export const perPageOptions = [
  { value: 10, label: "10" },
  { value: 25, label: "25" },
  { value: 50, label: "50" },
];

export const handsOptions = [
  { value: "L", label: "L" },
  { value: "R", label: "R" },
];
export const positionOptions = [
  { value: "catcher", label: "Catcher" },
  { value: "first_base", label: "First Base" },
  { value: "second_base", label: "Second Base" },
  { value: "shortstop", label: "Shortstop" },
  { value: "third_base", label: "Third Base" },
  { value: "outfield", label: "Outfield" },
  { value: "pitcher", label: "Pitcher" },
];
export const schoolYearsOptions = [
  { value: "freshman", label: "Freshman" },
  { value: "sophomore", label: "Sophomore" },
  { value: "junior", label: "Junior" },
  { value: "senior", label: "Senior" },
  { value: "none", label: "None" },
];
export const filterPositionOptions = [
  { value: "", label: "All" },
  ...positionOptions,
];
export const battingLeadTypeOptions = [
  { value: "exit_velocity", label: "Exit Velocity" },
  { value: "carry_distance", label: "Carry Distance" },
];

export const logOptions = [
  { value: "None", label: "None" },
  { value: "Four Seam Fastball", label: "Four Seam Fastball" },
  { value: "Slider", label: "Slider" },
];
