'use client';

import Uppy from '@uppy/core';
// For now, if you do not want to install UI components you
// are not using import from lib directly.
import Xhr from '@uppy/xhr-upload';
import { useState } from 'react';
import DragDrop from '@uppy/react/lib/DragDrop';
import StatusBar from '@uppy/react/lib/StatusBar';
import '@uppy/core/dist/style.min.css';
import '@uppy/drag-drop/dist/style.min.css';
import '@uppy/status-bar/dist/style.min.css';

function createUppy() {
	return new Uppy()
  .use(Xhr, { endpoint: '/api/upload' });
}

export default function UppyDashboard() {
	// Important: use an initializer function to prevent the state from recreating.
	const [uppy] = useState(createUppy);

	return (
		<>
			<DragDrop uppy={uppy}  />
			<StatusBar uppy={uppy} />
		</>
	);
}