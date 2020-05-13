import React, { useState } from "react";

import { Link } from "react-router-dom";


function AddRecepie({recepie}) {
   
     return (
         <div className="card mt-3">
            <div className="card-body">
              <p>
                { recepie.body }
            </p>  
                

            </div>
        </div>
    );
}

export default AddRecepie;