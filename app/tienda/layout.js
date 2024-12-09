import Link from "next/link"

export const metadata = {
  title: 'Tienda - NextJS'

}

export default function TiendaLayout({children}) {
  return (
    <>
    <nav>
        <h3>Seccion tienda</h3>
      <ul>
        <li>
          <Link href="/tienda/categorias/computadoras">Computadores</Link> 
        </li>
        <li>
          <Link href="/tienda/categorias">Categorias</Link> 
        </li>
      </ul>
    </nav>

    {children}

    </>
  )
}

