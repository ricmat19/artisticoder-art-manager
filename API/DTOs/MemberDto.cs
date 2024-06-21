using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class MemberDto
    {
        public int Id { get; set; }
        public required string UserName { get; set; }
        public string PhotoUrl { get; set; }
        public int Age { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime LastActive { get; set; } = DateTime.UtcNow;
        public required string City { get; set; }
        public required string State { get; set; }
        public List<PhotoDto> Photos { get; set; }
    }
}