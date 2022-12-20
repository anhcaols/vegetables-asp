namespace Vegetables.Models.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ChiTietSP")]
    public partial class ChiTietSP
    {
        [Key]
        [Column(Order = 0)]
        public int SoThuTu { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaSP { get; set; }

        [StringLength(50)]
        public string DanNhanTH { get; set; }

        [Column(TypeName = "date")]
        public DateTime? ThoiHanSD { get; set; }

        public virtual ChiTietDD ChiTietDD { get; set; }

        public virtual ChiTietPNK ChiTietPNK { get; set; }

        public virtual SanPham SanPham { get; set; }
    }
}
