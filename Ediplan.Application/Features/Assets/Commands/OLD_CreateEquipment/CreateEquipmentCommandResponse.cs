﻿using Ediplan.Application.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ediplan.Application.Features.Assets.Commands.CreateEquipment;
public class CreateEquipmentCommandResponse : BaseResponse
{
    public CreateEquipmentCommandResponse() : base()
    {
        
    }

    public CreateEquipmentDto Equipment { get; set; } = default!;
}
