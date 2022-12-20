namespace Vegetables.Models.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DonDat")]
    public partial class DonDat
    {
        [Key]
        [Column(Order = 0)]
        public int MaDD { get; set; }

        public int? MaKH { get; set; }

        [Key]
        [Column(Order = 1)]
        public DateTime NgayBan { get; set; }

        public virtual TaiKhoan TaiKhoan { get; set; }
    }
}
