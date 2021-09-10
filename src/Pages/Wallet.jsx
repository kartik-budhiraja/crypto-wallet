import { Button, Divider, List } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Title from "antd/lib/typography/Title";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import { Store } from "../reducer";
import { getCurrrencyIcon, getCurrrencyName } from "../utils";

const Wallet = () => {
  const query = useQuery();
  const history = useHistory();
  const currency = query.get("curr");

  const { state } = useContext(Store);

  const { balances, transactions } = state;
  console.log(transactions[currency]);
  return (
    <>
      <Title>{getCurrrencyName(currency)}</Title>
      <Button type="link" onClick={() => history.goBack()}>
        Go Back
      </Button>
      <h3>Balance - {balances[currency]}</h3>
      <Divider />
      <List
        itemLayout="horizontal"
        dataSource={transactions[currency]}
        renderItem={(item) => (
          <List.Item extra={item.amount}>
            <List.Item.Meta
              avatar={<Avatar src={getCurrrencyIcon(currency)} />}
              title={item.type}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Wallet;
