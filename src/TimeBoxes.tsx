import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from "@mui/material/Table"
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const rows = [
  { event: 'プランニング', percentage: 0.05, month: 8, week2: 4, week1: 2},
  { event: 'リファインメント', percentage: 0.10, month: 16, week2: 8, week1: 4},
  { event: 'レビュー', percentage: 0.01875, month: 8, week2: 4, week1: 2},
  { event: 'レトロスペクティブ', percentage: 0.05, month: 8, week2: 4, week1: 2},
];

export default () => {
  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: 8 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>イベント</TableCell>
              <TableCell>割合</TableCell>
              <TableCell>1ヶ月</TableCell>
              <TableCell>2週間</TableCell>
              <TableCell>1週間</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow>
                <TableCell component="th">{row.event}</TableCell>
                <TableCell>{row.percentage * 100} %</TableCell>
                <TableCell>{row.month} 時間</TableCell>
                <TableCell>{row.week2} 時間</TableCell>
                <TableCell>{row.week1} 時間</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
