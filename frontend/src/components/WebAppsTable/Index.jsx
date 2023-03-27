import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
  Button,
  TableFooter,
} from "@mui/material";
import { useState } from "react";
import DeveloperList from "./DeveloperList";
import NoWebAppsData from "./NoWebAppsData";

const WebAppsTable = (props) => {
  const { webAppData } = props;
  //Constants
  const ROWS_PER_PAGE = 15;
  //Pagination State Management
  const [webAppTablePage, setWebAppTablePage] = useState(0);

  return (
    <>
      {webAppData?.length > 0 ? (
        <Paper sx={{ margin: "30px" }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <b>Product Number</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Product Name</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Scrum Master</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Product Owner</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Developer Names</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Start Date</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Methodology</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Update</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {webAppData
                  .slice(
                    webAppTablePage * ROWS_PER_PAGE,
                    webAppTablePage * ROWS_PER_PAGE + ROWS_PER_PAGE
                  )
                  .map((webApp) => (
                    <TableRow key={webApp.productId}>
                      <TableCell align="left">{webApp.productId}</TableCell>
                      <TableCell align="left">{webApp.productName}</TableCell>
                      <TableCell align="left">
                        {webApp.scrumMasterName}
                      </TableCell>
                      <TableCell align="left">
                        {webApp.productOwnerName}
                      </TableCell>
                      <TableCell align="left">
                        <DeveloperList developerList={webApp.Developers} />
                      </TableCell>
                      <TableCell align="left">{webApp.startDate}</TableCell>
                      <TableCell align="left">{webApp.methodology}</TableCell>
                      <TableCell align="left">
                        <Button variant="outlined" size="small">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    count={webAppData.length}
                    onPageChange={(event, page) => setWebAppTablePage(page)}
                    page={webAppTablePage}
                    rowsPerPage={ROWS_PER_PAGE}
                    rowsPerPageOptions={[ROWS_PER_PAGE]}
                    sx={{
                      border: "none",
                    }}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <NoWebAppsData />
      )}
    </>
  );
};

export default WebAppsTable;
