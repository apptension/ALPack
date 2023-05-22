import { Menu, Transition } from '@headlessui/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

import { FragmentType, getFragmentData } from '@vm/api-client/__generated/gql';

import { projectFragment } from '@app/graphql';

interface ProjectsListItemProps {
  project: FragmentType<typeof projectFragment>;
}

export const ProjectsListItem = ({ project }: ProjectsListItemProps) => {
  const data = getFragmentData(projectFragment, project);
  return (
    <li className="flex flex-col p-4 bg-white dark:bg-slate-900 rounded-md shadow-md">
      <h2 className="mb-2 text-xl font-bold">{data.name}</h2>
      <div className="flex mb-2 space-x-2">
        <Link
          href={`/projects/${data.id}/edit`}
          className="flex items-center px-2 py-1 text-white bg-green-500 rounded-md hover:bg-green-600"
        >
          <PencilIcon className="w-5 h-5 mr-2" />
          Edit
        </Link>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex items-center px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600">
              <TrashIcon className="w-5 h-5 mr-2" />
              Delete
            </Menu.Button>
          </div>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm`}
                    onClick={() => {
                      // Handle delete
                    }}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <p className="text-sm text-gray-600 dark:text-slate-400">{data.environments.edges.length} environments</p>
    </li>
  );
};
