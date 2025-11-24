export interface DownloadItem {
  type: 'pdf' | 'video'; 
  url: string; 
}

export interface TableRowData {
  id: string | number; 
  title: string; 
  download: DownloadItem; 
}

export interface CustomTableProps {
  columnOneHeader: string;
  columnTwoHeader: string;
  data: TableRowData[];
}