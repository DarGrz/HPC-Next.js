import React, { useState, useEffect } from "react";

import Select from "react-select";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import PumpTable from "./PumpTable";
import classes from "./SelectPump.module.css";

const SelectPumps = (props) => {
  const [pump, setPump] = useState("");
  const [pumpB, setPumpB] = useState("");

  const onSelectPump = (e) => {
    const selectedId = e.id;
    const selectedPump = Products.filter((d) => d.id == selectedId)[0];
    setPump(selectedPump);
  };
  const onSelectPumpB = (e) => {
    const selectedId = e.id;
    const selectedPump = Products.filter((d) => d.id == selectedId)[0];
    setPumpB(selectedPump);
  };

  const Products = props.products;

  return (
    <Container>
      <Table className={classes.table}>
        <tbody>
          <tr>
            <th>Make a choice</th>
            <td>
              <Select
                className={classes.selector}
                onChange={(e) => {
                  onSelectPump(e);
                }}
                instanceId="long-value-select"
                placeholder="(A) Choose heat pump..."
                getOptionLabel={(option) =>
                  ` ${option.brand} ${option.model} ${option.power} kW`
                }
                getOptionValue={(option) => `${option.id}`}
                options={Products}
              />
            </td>
            <td>
              <Select
                className={classes.selector}
                onChange={(e) => {
                  onSelectPumpB(e);
                }}
                instanceId="long-value-select"
                placeholder="(B) Choose heat pump..."
                getOptionLabel={(option) =>
                  ` ${option.brand} ${option.model} ${option.power} kW`
                }
                getOptionValue={(option) => `${option.id}`}
                options={Products}
              />
            </td>
          </tr>

          {pump && <PumpTable pump={pump} pumpB={pumpB} />}
        </tbody>
      </Table>
    </Container>
  );
};

export default SelectPumps;
