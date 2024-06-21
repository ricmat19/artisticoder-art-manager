using API.Extensions;

namespace API.Entities
{
    public class AppUser
    {
        //properties
        public int Id { get; set; }
        public required string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateOnly DOB { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime LastActive { get; set; } = DateTime.UtcNow;
        public required string City { get; set; }
        public required string State { get; set; }
        public List<Photo> Photos { get; set; } = new();

        // public int GetAge(){
        //     return DOB.CalculateAge();
        // }
    }
}