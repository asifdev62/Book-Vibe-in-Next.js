"use client"
import { BookContext } from '@/contexts/BooksContext';
import { IBook } from '@/type/booksType';
import { useContext } from 'react';
import { Bar, BarChart, BarShapeProps, CartesianGrid, Label, LabelList, LabelProps, Tooltip, XAxis, YAxis } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[index % colors.length];

    return (
        <path
            strokeWidth={props.isActive ? 5 : 0}
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke={color}
            fill={color}
            style={{
                transition: 'stroke-width 0.3s ease-out',
            }}
        />
    );
};

const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
};


const Page = () => {

    const context = useContext(BookContext);
      if (!context) {
        return <p>Book Provider not found</p>;
    }

    const { readBooks } = context;

    const data = readBooks.map((book:IBook, index:number)=>{
      
        return{
            name: book.bookName,
            uv: book.totalPages,
            pv: index + 1,
            amt: index + 1,
        }
    })

    return (
        <div className='w-full overflow-x-auto px-4 py-12 flex justify-center'>
           {readBooks.length > 0 ? <BarChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid />
                <Tooltip cursor={{ fillOpacity: 0.5 }} />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Bar dataKey="uv" shape={TriangleBar} activeBar>
                    <LabelList content={CustomColorLabel} position="top" />
                </Bar>
                {/* <RechartsDevtools /> */}
            </BarChart> : <p className='font-bold text-gray-800 text-center'>No red books to display.</p>}
        </div>
    );
};

export default Page;