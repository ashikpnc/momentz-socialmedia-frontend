import "./style.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Tabs({ title, link, pathD, viewBox, page }) {
  return (
    <NavLink
      to={link}
      className={`layout_tabs ${page === title ? "active_tab" : ""}`}
    >
      <svg viewBox={viewBox}>
        <path d={pathD} />
      </svg>
      <span>{title}</span>
    </NavLink>
  );
}
export default function LeftBar({ page }) {
  const { user } = useSelector((state) => ({ ...state }));
  const tabs = [
    {
      title: "Feed",
      link: "/",
      pathD:
        "M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM128 416c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z",
      viewBox: "0 0 448 512",
    },
    {
      title: "Chat",
      link: "/chat",
      pathD:
        "M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z",
      viewBox: "0 0 512 512",
    },
    {
      title: "Gallery",
      link: "/gallery",
      pathD:
        "M512 32H160c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64H512c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 320c0 8.822-7.178 16-16 16h-16l-109.3-160.9C383.7 170.7 378.7 168 373.3 168c-5.352 0-10.35 2.672-13.31 7.125l-62.74 94.11L274.9 238.6C271.9 234.4 267.1 232 262 232c-5.109 0-9.914 2.441-12.93 6.574L176 336H160c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16H512c8.822 0 16 7.178 16 16V320zM224 112c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.68 0 32-14.33 32-32S241.7 112 224 112zM456 480H120C53.83 480 0 426.2 0 360v-240C0 106.8 10.75 96 24 96S48 106.8 48 120v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24S469.3 480 456 480z",
      viewBox: "0 0 576 512",
    },
  ];
  const tabs_follow = [
    {
      title: "Followers",
      link: "/followers",
      pathD:
        "M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z",
      viewBox: "0 0 640 512",
    },
    {
      title: "Following",
      link: "/following",
      pathD:
        "M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",
      viewBox: "0 0 640 512",
    },
  ];

  return (
    <div className="left_bar_container">
      <div className="left_wrapper">
        <div className="first">
          <NavLink to="/profile" className="profile_box_left">
            <img src={user?.picture} alt="" />
            <div className="name_profession_wrapper">
              <div className="name">{`${user?.first_name} ${user?.last_name}`}</div>
              <div className="profession">
                <span>online</span> <div className="active_green"></div>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="second">
          {tabs.map((tab, i) => (
            <Tabs
              key={i}
              title={tab.title}
              link={tab.link}
              pathD={tab.pathD}
              viewBox={tab.viewBox}
              page={page}
            />
          ))}
        </div>
        <div className="third">
          {tabs_follow.map((tab, i) => (
            <Tabs
              key={i}
              title={tab.title}
              link={tab.link}
              pathD={tab.pathD}
              viewBox={tab.viewBox}
              page={page}
            />
          ))}
        </div>
      </div>

      {/* {tabs.map((tab, i) => (
        <Tabs
          key={i}
          title={tab.title}
          page={page}
          link={tab.link}
          pathD={tab.pathD}
          viewBox={tab.viewBox}
        />
      ))} */}
    </div>
  );
}
