import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Navigate } from "react-router";
import SButton from "../../components/Button";
import SBreadCrumb from "../../components/Breadcrumb";
import SNavbar from "../../components/Navbar";
import { config } from "../../configs";

function CategoriesPage() {
  const token = localStorage.getItem("token");

  const [data, setData] = useState([]);

  console.log("data");
  console.log(data);

  useEffect(() => {
    console.log("useEffect");
    const getCategoriesAPI = async () => {
      try {
        const res = await fetch(
          `${config.api_host_dev}/cms/categories`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data);

        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategoriesAPI();
  }, []);

  if (!token) return <Navigate to="/signin" replace={true} />;

  return (
    <>
      {console.log("render")}
      <SNavbar />

      <Container className="mt-3">
        <SBreadCrumb textSecond="Categories" />
        <SButton>Tambah</SButton>

        <Table className="mt-3" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default CategoriesPage;
