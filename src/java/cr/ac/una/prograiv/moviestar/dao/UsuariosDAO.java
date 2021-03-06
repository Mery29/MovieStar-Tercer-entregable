/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.moviestar.dao;

import cr.ac.una.prograiv.moviestar.domain.Usuarios;
import cr.ac.una.prograiv.moviestar.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Query;

/**
 *
 * @author Byron
 */
public class UsuariosDAO extends HibernateUtil implements IBaseDAO<Usuarios, Integer>{

    @Override
    public void save(Usuarios o) {
         try {
            iniciaOperacion();
            getSesion().save(o);
            getTransac().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
    }

    @Override
    public Usuarios merge(Usuarios o) {
        try {
            iniciaOperacion();
            o = (Usuarios) getSesion().merge(o);
            getTransac().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Usuarios o) {
        try {
            iniciaOperacion();
            getSesion().delete(o);
            getTransac().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
    }

    @Override
    public Usuarios findByOther(Usuarios u) {
      Usuarios usuario = null;
      List<Usuarios> aux;
      aux = findAll();          
        for (int i =0; i <= aux.size(); i++) {
                if (aux.get(i).getUCorreo().equals(u.getUCorreo())  && aux.get(i).getUContrasena().equals(u.getUContrasena())) {
                    usuario = aux.get(i);
                    usuario.setOrdeneses(null);
                    return usuario;
            }
        }
        return usuario;
    }

    @Override
    public List<Usuarios> findAll() {
        List<Usuarios> listaUsuarios;
        try {
            iniciaOperacion();
            listaUsuarios = getSesion().createQuery("from Usuarios").list();
        } finally {
            getSesion().close();
        }
        for (int i =0; i < listaUsuarios.size(); i++)
            listaUsuarios.get(i).setOrdeneses(null);
        return listaUsuarios;
    }

    @Override
    public List<Usuarios> findAllByOther(String o) {   //Este método no necesita ser implementado aquí
        List<Usuarios> lista= null;
        try {
            iniciaOperacion();
            Query query = getSesion().createQuery("from Usuarios where = '"+ o +"'");
            lista= query.list();
        } finally {
            getSesion().close();
        }
       
        return lista;
    }

    
    
}
