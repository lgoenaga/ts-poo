export interface Driver {
  database: string;
  user: string;
  password: string;
  port: number;

  connect(): void;

}

class PostgresDriver implements Driver {
  constructor(
    public database: string = 'postgres',
    public user: string = 'postgres',
    public password: string = 'postgres',
    public port: number = 5432
    ) {}

  connect(): void {
    console.log('Connecting to Postgres...');
  }
}

class MySQLDriver implements Driver {
  constructor(
    public database: string = 'mysql',
    public user: string = 'root',
    public password: string = 'root',
    public port: number = 3306
    ) {}

  connect(): void {
    console.log('Connecting to MySQL...');
    }
}