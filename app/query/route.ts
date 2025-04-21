// import postgres from 'postgres';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// async function listInvoices() {
// 	const data = await sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

// 	return data;
// }

export async function GET() {
  try {
    const result = await sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;

    return NextResponse.json({ data: result.rows });
  } catch (error) {
    return NextResponse.json({ error: 'Query failed', details: error }, { status: 500 });
  }
}
