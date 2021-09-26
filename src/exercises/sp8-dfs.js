import { Stack } from "@datastructures-js/stack";

const installPackages = (packages, pkg) => {
    // Complete
}

const packages = {
    'pkg-1': [ 'pkg-2', 'pkg-4' ],
    'pkg-2': [ 'pkg-3', 'pkg-5' ],
    'pkg-3': [ 'pkg-5' ],
    'pkg-4': [ 'pkg-2' ],
    'pkg-5': []
}

installPackages(packages, 'pkg-1');
