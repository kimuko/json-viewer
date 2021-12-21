import * as React from 'react'
import dynamic from 'next/dynamic'
const ReactJsonViewCompare = dynamic(() => import('react-json-view-compare'), {
  ssr: false,
})
// import ReactDiffViewer from "react-diff-viewer";

const Sample = ({
 oldData,
 newData,
}) => (
 <>
   <div>
      <ReactJsonViewCompare oldData={oldData} newData={newData} />
      {/* <ReactDiffViewer
        oldValue={oldData}
        newValue={newData}
        splitView={true}
        leftTitle={"oldData"}
        rightTitle={"newData"}
      /> */}
   </div>
 </>
)

export default Sample
