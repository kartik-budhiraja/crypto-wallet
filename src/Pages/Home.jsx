import React, { useContext } from "react";
import { Divider, List, Spin, Typography } from "antd";

import Avatar from "antd/lib/avatar/avatar";
import { Store } from "../reducer";
import { useHistory } from "react-router-dom";
import { convertToDollar, getCurrrencyIcon } from "../utils";

const { Title } = Typography;

const Home = () => {
  const { state } = useContext(Store);
  const history = useHistory();

  const { loading, total, balances, rates } = state;

  return (
    <>
      {loading && <Spin />}
      {!loading && (
        <div style={{ padding: "10px" }}>
          <Title type="success" style={{ textAlign: "center" }}>
            ${total}
          </Title>
          <Divider />
          <List
            itemLayout="horizontal"
            dataSource={Object.keys(balances)}
            renderItem={(item) => (
              <List.Item
                extra={balances[item]}
                onClick={() => history.push(`/wallet?curr=${item}`)}
              >
                <List.Item.Meta
                  avatar={<Avatar src={getCurrrencyIcon(item)} />}
                  title={item}
                  description={`$${convertToDollar(
                    item,
                    balances[item],
                    rates
                  )}`}
                />
              </List.Item>
            )}
          />
        </div>
      )}
    </>
  );
};

export default Home;
