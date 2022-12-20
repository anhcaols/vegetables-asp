using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace Vegetables.Models.Entities
{
    public partial class Vegetables_DBContext : DbContext
    {
        public Vegetables_DBContext()
            : base("name=Vegetables_DBContext")
        {
        }

        public virtual DbSet<ChiTietDD> ChiTietDDs { get; set; }
        public virtual DbSet<ChiTietPNK> ChiTietPNKs { get; set; }
        public virtual DbSet<ChiTietSP> ChiTietSPs { get; set; }
        public virtual DbSet<DonDat> DonDats { get; set; }
        public virtual DbSet<LoaiSP> LoaiSPs { get; set; }
        public virtual DbSet<PhieuNK> PhieuNKs { get; set; }
        public virtual DbSet<SanPham> SanPhams { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<TaiKhoan> TaiKhoans { get; set; }
        public virtual DbSet<ThuongHieu> ThuongHieux { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ChiTietDD>()
                .HasOptional(e => e.ChiTietSP)
                .WithRequired(e => e.ChiTietDD);

            modelBuilder.Entity<ChiTietPNK>()
                .HasOptional(e => e.ChiTietSP)
                .WithRequired(e => e.ChiTietPNK);

            modelBuilder.Entity<SanPham>()
                .HasMany(e => e.ChiTietDDs)
                .WithRequired(e => e.SanPham)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<SanPham>()
                .HasMany(e => e.ChiTietPNKs)
                .WithRequired(e => e.SanPham)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<SanPham>()
                .HasMany(e => e.ChiTietSPs)
                .WithRequired(e => e.SanPham)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<TaiKhoan>()
                .Property(e => e.TenTK)
                .IsUnicode(false);

            modelBuilder.Entity<TaiKhoan>()
                .Property(e => e.MatKhau)
                .IsUnicode(false);

            modelBuilder.Entity<TaiKhoan>()
                .Property(e => e.SDT)
                .IsUnicode(false);

            modelBuilder.Entity<TaiKhoan>()
                .HasMany(e => e.DonDats)
                .WithOptional(e => e.TaiKhoan)
                .HasForeignKey(e => e.MaKH);

            modelBuilder.Entity<TaiKhoan>()
                .HasMany(e => e.PhieuNKs)
                .WithOptional(e => e.TaiKhoan)
                .HasForeignKey(e => e.MaNV);
        }
    }
}
