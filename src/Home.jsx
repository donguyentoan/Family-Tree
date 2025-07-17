import React, { useState } from 'react'
import { OrganizationChart } from 'primereact/organizationchart';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css'; // hoặc theme khác
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';

const Home = () => {
   const familyTree = [
  {
    type: 'person',
    expanded: true,
    className: 'bg-blue-500 text-white w-fit',
    style: { borderRadius: '12px' },
    data: {
      image: 'https://i.pravatar.cc/100?img=1',
      name: 'Đỗ Diện',
      title: '',
    },
    children: [
      {
        type: 'person',
        expanded: true,
        className: 'bg-green-500 text-white w-3',
        style: { borderRadius: '12px' },
        data: {
          image: 'https://i.pravatar.cc/100?img=2',
          name: 'Nguyễn Văn B',
          title: 'Con trưởng    ',
        },
        children: [
           {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            } 
        ]  
      },
      {
        type: 'person',
        expanded: true,
        className: 'bg-green-500 text-white w-3',
        style: { borderRadius: '12px' },
        data: {
          image: 'https://i.pravatar.cc/100?img=2',
          name: 'Đỗ Khắc Trí',
          title: 'Con trưởng    ',
        },
        children: [
           {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            } 
        ]  
       
      },
      {
        type: 'person',
        expanded: true,
        className: 'bg-green-500 text-white w-3',
        style: { borderRadius: '12px' },
        data: {
          image: 'https://i.pravatar.cc/100?img=2',
          name: 'Đỗ Khắc Hoài',
          title: 'Con trưởng    ',
        },
        children: [
           {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            } 
        ]  
       
      },
      {
        type: 'person',
        expanded: true,
        className: 'bg-green-500 text-white w-3',
        style: { borderRadius: '12px' },
        data: {
          image: 'https://i.pravatar.cc/100?img=2',
          name: 'Đỗ Khắc Trọng',
          title: 'Con trưởng    ',
        },
        children: [
           {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            }
        ]  
       
      },
      {
        type: 'person',
        expanded: true,
        className: 'bg-green-500 text-white w-3',
        style: { borderRadius: '12px' },
        data: {
          image: 'https://i.pravatar.cc/100?img=2',
          name: 'Đỗ Khắc Hữu',
          title: 'Con trưởng    ',
        },
        children: [
           {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            } 
        ]  
       
      },
      {
        type: 'person',
        expanded: true,
        className: 'bg-green-500 text-white w-3',
        style: { borderRadius: '12px' },
        data: {
          image: 'https://i.pravatar.cc/100?img=2',
          name: 'Đỗ Khắc Bảo',
          title: 'Con trưởng    ',
        },
        children: [
           {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            } 
        ]  
       
      },
      {
        type: 'person',
        expanded: true,
        className: 'bg-green-500 text-white w-3',
        style: { borderRadius: '12px' },
        data: {
          image: 'https://i.pravatar.cc/100?img=2',
          name: 'Đỗ Khắc Hiếu',
          title: 'Con trưởng    ',
        },
        children: [
           {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            },
            {
                type: 'person',
                expanded: true,
                className: 'bg-green-500 text-white w-5',
                style: { borderRadius: '12px' },
                data: {
                image: 'https://i.pravatar.cc/100?img=2',
                name: 'Nguyễn Văn B',
                title: 'Con trưởng    ',
                },  
            } 
        ]  
       
      },
  
    ],
  },
];

const nodeTemplate = (node) => {
    if (node.type === 'person') {
      return (
        <div className="flex flex-column align-items-center ">
          <img
            alt={node.data.name}
            src={node.data.image}
            className=" w-1rem h-1rem border-circle"
          />
          <small className=" text_be">{node.data.name}</small>
        </div>
      );
    }

    return <span>{node.label}</span>;
  };
 return (
    <div className="max-w-screen   flex justify-content-center ">
      <div className="card overflow-x-auto">
        <OrganizationChart value={familyTree} nodeTemplate={nodeTemplate} />
      </div>
    </div>
  );

}

export default Home