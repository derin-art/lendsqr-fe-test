import Style from "./Dashboard.module.scss";

type DashboardHeadlineItemProps = {
  icon: string;
  name: string;
  amount: number;
};

export default function DashboardHeadlineItem(
  props: DashboardHeadlineItemProps
) {
  return (
    <div className={Style.DashboardHeadlineItem}>
      <img src={props.icon}></img>
      <span>{props.name}</span>
      <div>{props.amount}</div>
    </div>
  );
}