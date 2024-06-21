using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppProject
    {
        public int Id { get; set; }
        public required string ProjectName { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime LastUpdated { get; set; } = DateTime.UtcNow;
    }
}