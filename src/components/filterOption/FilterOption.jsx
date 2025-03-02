import { useSelector } from "react-redux";

const FilterOption = () => {
  const users = useSelector((state) => state.admin.userData);
  const customer = [
    {
      key: 1,
      label: "customer1",
      value: "customer1",
    },
    {
      key: 2,
      label: "customer2",
      value: "customer2",
    },
    {
      key: 3,
      label: "customer3",
      value: "customer3",
    },
  ];
  const status = [
    {
      key: 1,
      label: "ongoing",
      value: "ongoing",
    },
    {
      key: 2,
      label: "completed",
      value: "completed",
    },
    {
      key: 3,
      label: "Not started",
      value: "Not started",
    },
    {
      key: 4,
      label: "Testing",
      value: "Testing",
    },
    {
      key: 5,
      label: "Today test",
      value: "Today test",
    },
  ];

  const members = Array.isArray(users)
    ? users.map((members) => ({ label: members.username, value: members.id }))
    : [];
  return { customer, status, members, users };
};

export default FilterOption;
